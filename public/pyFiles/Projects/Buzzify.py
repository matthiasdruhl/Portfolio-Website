from Project import Project

class Buzzify(Project):
    def __init__(self):
        super().__init__(
            name="Buzzify",
            status="Completed",
            dates="January 2024 - May 2024",
            role="Backend Developer",
            description="Buzzify is a mobile app that allows users to view their Spotify listening history and create/share wraps"
        )
        self.teamates = [
            "Xavier Geno",
            "Valentina Garcia",
            "Andre Koga",
            "Tony Nguyen"
        ]
        self.features = {
            "Spotify Listening History": "Users can view their Spotify listening history",
            "Wraps": "Users can create/share wraps",
            "Friends": "Users can add friends and see their listening history",
        }
        self.techStack = {
            "Frontend": "XML",
            "Backend": "Java",
            "Database": "Firebase",
            "Authentication": "Firebase Authentication",
        }
        self.challenges = {
            "Spotify API Integration": "Complex integration with Spotify's API for user data",
            "Real-time Data Sync": "Keeping user data synchronized across devices"
        }
    
    def get_project_summary(self) -> str:
        return f"{self.name} - {self.role}. {self.description}"