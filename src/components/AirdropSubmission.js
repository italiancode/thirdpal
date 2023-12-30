import { LitElement, html, css } from "lit";
import { TWStyles } from "../css/twlit";
import globalSemanticCSS from "../css/global-semanticCSS";
import { firestore_db } from "../../utils/firebase";
import { addDoc, collection } from "firebase/firestore";

class AirdropSubmission extends LitElement {
  static styles = [
    TWStyles,
    globalSemanticCSS,
    css`
      /* Add your CSS styles here */
    `,
  ];

  static airdropTaskTypes = [
    { id: 1, name: "Social Media" },
    { id: 2, name: "Quiz" },
    { id: 3, name: "Token Swap" },
    { id: 4, name: "Referral" },
    { id: 5, name: "Content Creation" },
    // Add more airdrop types as needed
  ];

  constructor() {
    super();
    this.selectedAirdrop = {};
    this.airdropForm = {
      id: "",
      name: "",
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

  selectAirdrop(event) {
    const selectedAirdropId = parseInt(event.target.value);
    const selectedAirdrop = AirdropSubmission.airdropTaskTypes.find(
      (type) => type.id === selectedAirdropId
    );

    if (selectedAirdrop) {
      this.airdropForm.taskType = selectedAirdrop.id; 
      const airdropFormsCollection = collection(firestore_db, "airdropForms");

      addDoc(airdropFormsCollection, this.airdropForm)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          this.clearForm(); // Clear the form after successful submission if needed
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  }

  generateNewID() {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000).toString();
    this.airdropForm.id = timestamp + random; // Update the ID property
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const airdropFormsCollection = collection(firestore_db, "airdropForms");

    // Add form data to Firestore collection using 'addDoc'
    addDoc(airdropFormsCollection, this.airdropForm)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        this.clearForm();
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  // Helper method to clear the form after submission
  clearForm() {
    this.airdropForm = {
      /* Reset or assign initial values for form fields */
    };
    this.requestUpdate();
  }

  render() {
    // Generate a new ID every time the form is rendered
    this.generateNewID();

    return html`
      <form @submit="${this.handleFormSubmit}">
        <h2>Airdrop Submission Form</h2>

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
              >Name/Title:</label
            >
            <input
              type="text"
              id="name"
              name="name"
              .value="${this.airdropForm.name}"
              @input="${(e) => (this.airdropForm.name = e.target.value)}"
              class="block w-full border-gray-300 rounded border  focus:border-b-blue-500 sm:text-sm"
              required
              required
            />
          </div>

          <div class="grid gap-1 w-72">
            <label
              for="description"
              class="block text-sm font-medium text-gray-700"
              >Description:</label
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
        </div>

        <h4>Organizer</h4>
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

        <h4>Task</h4>
        <div class="grid gap-3">
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

        <h5>Select Task Type</h5>
        <select
          class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          @change="${this.selectAirdrop}"
        >
          <option value="" class="text-gray-500 px-5">Select</option>
          ${AirdropSubmission.airdropTaskTypes.map(
            (type) =>
              html`<option
                value="${type.id}"
                .value="${this.airdropForm.taskType}"
                @input="${(e) => (this.airdropForm.taskType = e.target.value)}"
                class="text-gray-900 hover:bg-gray-100"
              >
                ${type.name}
              </option>`
          )}
        </select>

        ${this.selectedAirdrop && Object.keys(this.selectedAirdrop).length !== 0
          ? html`
              ${this.selectedAirdrop.name === "Social Media"
                ? html`
                    <div class="mb-6">
                      <h4 class="text-lg font-bold mb-2">Social Media Task</h4>

                      <div class="grid gap-1">
                        <label for="socialMediaPlatform" class="block mb-1"
                          >Platform:</label
                        >
                        <input
                          type="text"
                          id="socialMediaPlatform"
                          name="socialMediaPlatform"
                          .value="${this.airdropForm.task.taskData.platform ||
                          ""}"
                          @input="${(e) =>
                            (this.airdropForm.task.taskData.platform =
                              e.target.value)}"
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
                          .value="${this.airdropForm.task.taskData.username ||
                          ""}"
                          @input="${(e) =>
                            (this.airdropForm.task.taskData.username =
                              e.target.value)}"
                          class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500 mb-3"
                        />
                      </div>

                      <div class="grid gap-1">
                        <label for="socialMediaLink" class="block mb-1"
                          >Link:</label
                        >
                        <input
                          type="text"
                          id="socialMediaLink"
                          name="socialMediaLink"
                          .value="${this.airdropForm.task.taskData.link || ""}"
                          @input="${(e) =>
                            (this.airdropForm.task.taskData.link =
                              e.target.value)}"
                          class="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  `
                : html` <!-- Add HTML for other task types --> `}
            `
          : html`Please select a Task Type`}

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

        <h4>Token & Reward</h4>
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
