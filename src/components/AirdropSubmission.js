import { LitElement, html, css } from "lit";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";
import { firestore_db } from "../../utils/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

class AirdropSubmission extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      /* Add your CSS styles here */
    `,
  ];

  static airdropTaskTypes = [
    { id: 1, name: "Social" },
    { id: 2, name: "Quiz" },
    { id: 3, name: "Token Swap" },
    { id: 4, name: "Referral" },
    { id: 5, name: "Content Creation" },
    // Add more airdrop types as needed
  ];

  constructor() {
    super();
    this.selectedAirdrop = {};
    this.selectedTaskType = "";
    this.airdropForm = {
      id: "",
      title: "",
      slug: "",
      description: "",
      organizer: {
        name: "",
        website: "",
        contactEmail: "",
        projectImage: "",
      },
      taskName: "",
      taskDescription: "",
      taskType: "",
      task: {
        taskData: {},
      },
      completionCriteria: "",
      example: "",
      completed: false,
      startDate: "",
      endDate: "",
      network: "",
      tokenContract: "",
      rewardToken: "",
      totalRewards: "",
      participants: [
        {
          userId: "",
          completedTasks: [],
          claimed: false,
        },
      ],
      agencyApproval: false,
    };

    this.generateNewID();
  }

  generateNewID() {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000).toString();
    this.airdropForm.id = timestamp + random; // Update the ID property
  }

  handleTaskTypeChange(event) {
    const selectedTaskTypeId = event.target.value;

    if (selectedTaskTypeId) {
      // Find the selected task type based on the ID
      const selectedTaskType = AirdropSubmission.airdropTaskTypes.find(
        (taskType) => taskType.id === parseInt(selectedTaskTypeId)
      );

      if (selectedTaskType) {
        this.selectedTaskType = selectedTaskTypeId;

        // Set both id and name for the taskType in the form
        this.airdropForm.taskType = {
          id: selectedTaskTypeId,
          name: selectedTaskType.name,
        };

        // Trigger an update to re-render the component
        this.requestUpdate();
      }
    }
  }

  renderTaskInputs() {
    switch (parseInt(this.selectedTaskType)) {
      case 1: // Social Media
        if (!this.airdropForm.task) {
          this.airdropForm.task = {
            taskData: {
              platform: "",
              username: "",
              link: "",
            },
          };
        }
        return html`
          <div class="mb-6">
            <div class="grid gap-1">
              <label for="socialMediaPlatform" class="block mb-1"
                >Platform:</label
              >
              <input
                type="text"
                id="socialMediaPlatform"
                name="socialMediaPlatform"
                .value="${this.airdropForm.task.taskData.platform || ""}"
                @input="${(e) =>
                  (this.airdropForm.task.taskData.platform = e.target.value)}"
                class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500 mb-3"
              />
            </div>

            <div class="grid gap-1">
              <label for="socialMediaUsername" class="block mb-1"
                >Username:</label
              >
              <input
                type="text"
                id="socialMediaUsername"
                name="socialMediaUsername"
                .value="${this.airdropForm.task.taskData.username || ""}"
                @input="${(e) =>
                  (this.airdropForm.task.taskData.username = e.target.value)}"
                class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500 mb-3"
              />
            </div>

            <div class="grid gap-1">
              <label for="socialMediaLink" class="block mb-1">Link:</label>
              <input
                type="text"
                id="socialMediaLink"
                name="socialMediaLink"
                .value="${this.airdropForm.task.taskData.link || ""}"
                @input="${(e) =>
                  (this.airdropForm.task.taskData.link = e.target.value)}"
                class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        `;
      case 2: // Quiz
        if (!this.airdropForm.task) {
          this.airdropForm.task = { taskData: {} };
        }
        return html`
          <!-- Inputs for Quiz task type -->
          <label for="quizQuestion">Quiz Question:</label>
          <input type="text" id="quizQuestion" name="quizQuestion" />
          <!-- Add more inputs as needed for Quiz task -->
        `;
      case 3: // Token Swap
        if (!this.airdropForm.task) {
          this.airdropForm.task = { taskData: {} };
        }
        return html`
          <!-- Inputs for Token Swap task type -->
          <label for="tokenSwapInput">Token Swap Details:</label>
          <input type="text" id="tokenSwapInput" name="tokenSwapInput" />
          <!-- Add more inputs as needed for Token Swap task -->
        `;
      case 4: // Referral
        if (!this.airdropForm.task) {
          this.airdropForm.task = { taskData: {} };
        }
        return html`
          <!-- Inputs for Referral task type -->
          <label for="referralInput">Referral Code:</label>
          <input type="text" id="referralInput" name="referralInput" />
          <!-- Add more inputs as needed for Referral task -->
        `;
      case 5: // Content Creation
        if (!this.airdropForm.task) {
          this.airdropForm.task = { taskData: {} };
        }
        return html`
          <!-- Inputs for Content Creation task type -->
          <label for="contentCreationInput">Content Details:</label>
          <input
            type="text"
            id="contentCreationInput"
            name="contentCreationInput"
          />
          <!-- Add more inputs as needed for Content Creation task -->
        `;
      default:
        return html``; // No additional inputs for unknown task type
    }
  }

  handleNameChange(event) {
    const titleValue = event.target.value;

    // Update the 'name' field in the form
    this.airdropForm.title = titleValue;

    // Check if the titleValue exists before using toLowerCase()
    if (titleValue) {
      // Generate a slug from the name value (convert to lowercase and replace spaces with hyphens)
      const slugValue = titleValue.toLowerCase().replace(/\s+/g, "-");

      // Update the 'slug' input field value
      const slugInput = this.shadowRoot.getElementById("slug");
      slugInput.value = slugValue;
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();

    // Disable the submit button
    const submitButton = this.shadowRoot.querySelector('button[type="submit"]');
    submitButton.disabled = true;

    // Show a notice to inform users that the airdrop is being submitted
    const noticeElement = document.createElement("p");
    noticeElement.textContent = "Submitting airdrop...";
    this.shadowRoot.appendChild(noticeElement);

    // Generate slug value from the 'name' field (if it's not already updated via handleNameChange)
    if (!this.airdropForm.slug) {
      const titleValue = this.airdropForm.title;
      const slugValue = titleValue.toLowerCase().replace(/\s+/g, "-");
      this.airdropForm.slug = slugValue;
    }

    const airdropFormsCollection = collection(firestore_db, "airdropForms");

    // Use the slug as the document ID in Firestore using 'doc' method
    const airdropDocRef = doc(airdropFormsCollection, this.airdropForm.slug);

    // Set the data for the document using 'set' method
    setDoc(airdropDocRef, this.airdropForm)
      .then(() => {
        console.log("Document written with ID: ", this.airdropForm.slug);
        this.clearForm();
        window.location.reload(); // Reload the page after successful submission
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  clearForm() {
    this.airdropForm = {};
    this.requestUpdate();
  }

  render() {
    this.generateNewID();

    return html`
      <form @submit="${this.handleFormSubmit}">
        <div class="w-full text-start my-6">
          <h2>Airdrop Submission Form</h2>
        </div>

        <div class="grid gap-3">
          <div class="grid gap-1 w-52">
            <label for="id" class="block text-sm font-medium text-gray-700"
              >ID:</label
            >
            <input
              type="text"
              id="id"
              name="id"
              .value="${this.airdropForm.id}"
              @input="${(e) => (this.airdropForm.id = e.target.value)}"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
              disabled
            />
          </div>

          <div class="grid gap-1 w-60">
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Airdrop Title:</label
            >
            <input
              type="text"
              id="name"
              name="name"
              .value="${this.airdropForm.title}"
              @input="${this.handleNameChange}"
              placeholder="Enter title"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div class="w-full text-start my-6"><h4>Organizer</h4></div>

        <div class="grid gap-3">
          <div class="grid gap-1 w-72">
            <label
              for="organizerName"
              class="block text-sm font-medium text-gray-700"
              >Organizer Name:</label
            >
            <input
              type="text"
              id="organizerName"
              name="organizerName"
              .value="${this.airdropForm.organizer.name}"
              @input="${(e) =>
                (this.airdropForm.organizer.name = e.target.value)}"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
            />
          </div>

          <div class="grid gap-1 w-72">
            <label
              for="description"
              class="block text-sm font-medium text-gray-700"
              >About Organizer:</label
            >
            <textarea
              id="description"
              name="description"
              .value="${this.airdropForm.description}"
              @input="${(e) => (this.airdropForm.description = e.target.value)}"
              class="block w-full border-gray-300 rounded border focus:border-b-blue-500 sm:text-sm resize-none"
              rows="5"
              required
            ></textarea>
          </div>

          <div class="grid gap-1 w-72">
            <label for="website" class="block text-sm font-medium text-gray-700"
              >Website:</label
            >
            <input
              type="text"
              id="website"
              name="website"
              .value="${this.airdropForm.organizer.website}"
              @input="${(e) =>
                (this.airdropForm.organizer.website = e.target.value)}"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
            />
          </div>

          <div class="grid gap-1 w-72">
            <label
              for="contactEmail"
              class="block text-sm font-medium text-gray-700"
              >Contact Email:</label
            >
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              .value="${this.airdropForm.organizer.contactEmail}"
              @input="${(e) =>
                (this.airdropForm.organizer.contactEmail = e.target.value)}"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
            />
          </div>

          <div class="grid gap-1 w-72">
            <label
              for="projectImage"
              class="block text-sm font-medium text-gray-700"
              >Project Image:</label
            >
            <input
              type="text"
              id="projectImage"
              name="projectImage"
              .value="${this.airdropForm.organizer.projectImage}"
              @input="${(e) =>
                (this.airdropForm.organizer.projectImage = e.target.value)}"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div class="w-full text-start my-6"><h4>Task</h4></div>

        <div class="grid gap-3">
          <div class="grid gap-1 w-72">
            <label
              for="taskType"
              class="block text-sm font-medium text-gray-700"
              >Select Task Type:</label
            >
            <select
              id="taskType"
              class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              @change="${this.handleTaskTypeChange}"
            >
              <option value="" selected disabled>Select Task Type</option>
              ${AirdropSubmission.airdropTaskTypes.map(
                (taskType) => html`
                  <option
                    value="${taskType.id}"
                    ?selected="${this.airdropForm.taskType.id === taskType.id}"
                  >
                    ${taskType.name}
                  </option>
                `
              )}
            </select>

            ${this.renderTaskInputs()}
          </div>
          <div class="grid gap-1 w-72">
            <label
              for="taskName"
              class="block text-sm font-medium text-gray-700"
              >Task Name/Title</label
            >
            <input
              type="text"
              id="taskName"
              name="taskName"
              .value="${this.airdropForm.taskName}"
              @input="${(e) => (this.airdropForm.taskName = e.target.value)}"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
            />
          </div>

          <div class="grid gap-1 w-72">
            <label
              for="taskDescription"
              class="block text-sm font-medium text-gray-700"
              >Task Description</label
            >
            <textarea
              type="text"
              id="taskDescription"
              name="taskDescription"
              .value="${this.airdropForm.taskDescription}"
              @input="${(e) =>
                (this.airdropForm.taskDescription = e.target.value)}"
              class="block w-full border-gray-300 rounded border focus:border-b-blue-500 sm:text-sm resize-none"
              rows="5"
              required
            ></textarea>
          </div>
        </div>

        <div class="flex gap-3 my-5">
          <div class="grid gap-1">
            <label
              for="startDate"
              class="block text-sm font-medium text-gray-700"
              >Start Date:</label
            >
            <input
              type="date"
              id="startDate"
              name="startDate"
              .value="${this.airdropForm.startDate}"
              @input="${(e) => (this.airdropForm.startDate = e.target.value)}"
              placeholder="Select start date"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
            />
          </div>

          <div class="grid gap-1">
            <label for="endDate" class="block text-sm font-medium text-gray-700"
              >End Date:</label
            >
            <input
              type="date"
              id="endDate"
              name="endDate"
              .value="${this.airdropForm.endDate}"
              @input="${(e) => (this.airdropForm.endDate = e.target.value)}"
              placeholder="Select end date"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div class="w-full text-start my-6"><h4>Token & Reward</h4></div>

        <div class="grid gap-3">
          <div class="grid gap-1 w-52">
            <label
              for="blockchainNetwork"
              class="block text-sm font-medium text-gray-700"
              >Blockchain Network</label
            >
            <input
              type="text"
              id="blockchainNetwork"
              name="blockchainNetwork"
              .value="${this.airdropForm.network}"
              @input="${(e) => (this.airdropForm.network = e.target.value)}"
              placeholder="Blockchain network"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
            />
          </div>

          <div class="grid gap-1 w-52">
            <label
              for="tokenContract"
              class="block text-sm font-medium text-gray-700"
              >Reward Token Contract</label
            >
            <input
              type="text"
              id="tokenContract"
              name="tokenContract"
              .value="${this.airdropForm.tokenContract}"
              @input="${(e) =>
                (this.airdropForm.tokenContract = e.target.value)}"
              placeholder="Token contract address"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <div class="flex gap-3 my-5">
          <div class="grid gap-1">
            <label
              for="rewardToken"
              class="block text-sm font-medium text-gray-700"
              >Reward Token:</label
            >
            <input
              type="text"
              id="rewardToken"
              name="rewardToken"
              .value="${this.airdropForm.rewardToken}"
              @input="${(e) => (this.airdropForm.rewardToken = e.target.value)}"
              placeholder="Reward token"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
            />
          </div>

          <div class="grid gap-1">
            <label
              for="totalRewards"
              class="block text-sm font-medium text-gray-700"
              >Total Rewards:</label
            >
            <input
              type="number"
              id="totalRewards"
              name="totalRewards"
              .value="${this.airdropForm.totalRewards}"
              @input="${(e) =>
                (this.airdropForm.totalRewards = e.target.value)}"
              placeholder="Enter total rewards"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
            />
          </div>
        </div>

        <input
          type="text"
          id="slug"
          name="slug"
          .value="${this.airdropForm.slug}"
          disabled
          hidden
        />

        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Airdrop
        </button>
      </form>
    `;
  }
}

customElements.define("airdrop-submission", AirdropSubmission);
