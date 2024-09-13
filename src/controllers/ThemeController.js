// Importing required modules from 'lit'
import { ReactiveController, ReactiveControllerHost } from "lit";

// Defining the ThemeController class that implements ReactiveController
class ThemeController implements ReactiveController {
  private host: ReactiveControllerHost; // Using 'host' as private
  private darkMode: boolean = false; // Initialize darkMode property

  // Constructor for initializing the controller
  constructor(host: ReactiveControllerHost) {
    this.host = host; // Assign host to private property
    this.host.addController(this); // Add this controller to the host
    this.initializeTheme(); // Initialize theme based on local storage or system preference
  }

  // Method to initialize the theme based on local storage or system preference
  private initializeTheme() {
    const storedMode = localStorage.getItem("theme");
    this.darkMode = storedMode
      ? storedMode === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // Method to set the theme and update local storage
  public setTheme(darkMode: boolean) {
    this.darkMode = darkMode;
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    this.host.requestUpdate(); // Request an update to the host
  }

  // Lifecycle method called when the controller is connected to the host
  public hostConnected() {
    this.host.requestUpdate(); // Ensure host is updated when connected
  }
}

export default ThemeController;
