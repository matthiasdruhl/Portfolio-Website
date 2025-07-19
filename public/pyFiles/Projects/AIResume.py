from Project import Project

class QwyseResume(Project):
    def __init__(self):
        super().__init__(
            name="Qwyse Resume Generator",
            status="Completed",
            dates="August 2024 - May 2025",
            role="Team Lead and Full Stack Developer",
            description="AI Resume Generator is a tool that allows users to generate a resume for a given job description and user profile. \
                It uses AI to generate a resume that is tailored to the user's profile and job description. \
                It also allows users to review an existing resume and provide feedback. It also allows users to edit the resume using an In app Latex Editor."
        )
        self.organization = "Qwyse"
        self.teamates = [
            "Robert Spence",
            "Wesley Imig",
            "Sai Velpuri",
            "David Zhou",
            "Robert McDonald"    
        ]
        self.features = {
            "AI Resume Generation": "Generate a resume for a given job description and user profile",
            "User Profile": "User can input their profile and job description",
            "Job Description": "User can input their job description",
            "Resume Generation": "Generate a resume for a given job description and user profile",
            "Resume Review": "Review an existing resume and provide feedback",
            "Resume Download": "Download the resume in PDF format",
            "Resume Save": "Save the resume to the user's account",
            "Resume Delete": "Delete the resume from the user's account",
            "Resume Edit": "Edit the resume using an In app Latex Editor",
        }
        self.techStack = {
            "Frontend": "React.js",
            "Backend": "Node.js",
            "Database": "SQLite",
            "AI": "Azure AI Studio",
        }
        self.challenges = {
            "Resume Formatting": "Extremely difficult to get the resume formatting to be consistent",
            "Latex Code Generation": "Latex code would sometimes error out and cause compilation errors"
        }
    
    def get_project_summary(self) -> str:
        return f"{self.name} - {self.role} at {self.organization}. {self.description}"
       
        
