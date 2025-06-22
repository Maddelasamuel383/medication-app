Medication Management System
Project Overview:
You are tasked with implementing a Medication Management app for both patients and caretakers. The app features role-based dashboards, medication tracking, and other essential functionalities. You will be working with React for the frontend, and SQLite and Node.js for the backend.
Current State of the Codebase:
The current codebase features:
React for frontend development.


Role-based dashboard system for each user account (patients/caretakers).


UI for medication tracking with calendar visualization.


Mock data for streaks, adherence rates, and medication logs.


Photo upload interface for medication proof (non-functional).


Notification settings UI (non-functional).


All data is stored in local state (no persistence).



Technology Stack:
Frontend: React, JavaScript, React Query, CSS


Backend: SQLite, Node.js



Core Requirements:
User Authentication:


Implement SQLite authentication for user login/signup functionality.


Medication Management:


Implement CRUD operations for managing medications:


Add medications (name, dosage, frequency).


Mark medications as taken for the day.


View medication list.


Display a simple adherence percentage for the medications.



Phase 1 (Required) Features:
SQLite Authentication: Implement user login/signup with SQLite authentication.


Basic CRUD for Medications:


Add medications with relevant details (name, dosage, frequency).


Mark medications as taken for the day.


View medications in a list format.


Dashboard Implementation:


Connect one dashboard (either patient or caretaker) to real data from SQLite.



Phase 2 (Optional) Features:
Real-Time Updates: Implement real-time updates for caretaker-patient interactions.


Adherence Tracking: Implement basic adherence tracking functionality.



Phase 3 (Bonus) Features:
File Uploads: Implement file upload functionality for medication proof (photo upload).


Deployment (Bonus): Deploy the app to Vercel or Netlify.



Evaluation Criteria:
Code Organization: Evaluate how well the code is structured and maintained.


Component Reusability: Review how components are reused across the app.


State Management: Evaluate the state management approach and its scalability.


Error Handling: Ensure proper error handling for API calls and edge cases.


Performance Considerations: Evaluate the app's performance, especially with re-renders.


Security Awareness: Check for input sanitization and secure handling of user data.


TypeScript Usage: Although TypeScript is not used, proper JavaScript usage will be assessed.



Additional Requirements:
Form Validation: Implement proper form validation with meaningful error messages.


Loading/Error States: Handle loading and error states properly for user experience.


Version Control: Use Git for version control with meaningful commit messages.


Testing: Write 2-3 meaningful tests using Vitest for the app's functionalities.


README: Include a README file with setup instructions for running the app locally.



Submission Guidelines:
Submit your project files, including the codebase, tests, and README.


Ensure your repository is well-structured, and follow good coding practices.


Ensure the app is functional as per the requirements and that it runs without errors.

