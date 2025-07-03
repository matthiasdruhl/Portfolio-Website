from Project import Project

class UniLease(Project):
    def __init__(self):
        super().__init__(
            name="UniLease",
            status="In Progress",
            dates="May 2025 - Present",
            role="Full Stack Developer",
            description="UniLease is a platform geared towards students to find and rent apartments from other students."
        )
        self.teamates = [
            "Xavier Geno",
            "Valentina Garcia",
            "Andre Koga",
            "Tony Nguyen"
        ]
        self.features = {
            "Apartment Listing": "Students can list their apartments for rent",
            "Apartment Search": "Students can search for apartments",
            "Apartment Application": "Students can apply to apartments",
            "Apartment Management": "Students can manage their apartments",
            "Apartment Reviews": "Students can review apartments",
        }
        self.techStack = {
            "Frontend": "React.js",
            "Backend": "Golang",
            "Database": "AWS DynamoDB",
            "Serverless": "AWS Lambda",
            "Authentication": "AWS Cognito",
            "Caching": "AWS ElastiCache",
        }
        self.challenges = {
            "AWS Integration": "Complex integration with multiple AWS services",
            "Real-time Notifications": "Implementing real-time updates for apartment applications"
        }
    
    def get_project_summary(self) -> str:
        return f"{self.name} - {self.role}. {self.description}"

        