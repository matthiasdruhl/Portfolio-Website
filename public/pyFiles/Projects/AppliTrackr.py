from Project import Project

class AppliTrack(Project):
    def __init__(self):
        super().__init__(
            name="AppliTrack - Automated Job Application Tracker",
            status="Completed",
            dates="January 2024 - April 2024",
            role="Full Stack Developer",
            description="A comprehensive job application tracking platform that automates the entire job search process. \
                The system includes AI-powered email parsing, Chrome extension integration, and automated job data extraction \
                from any website. Features intelligent web scraping, real-time synchronization, and automated job status updates."
        )
        self.organization = "Personal Project"
        self.teamates = [
            "Solo Developer"
        ]
        self.features = {
            "AI-Powered Email Parsing": "Intelligent analysis of job-related emails using Google Gemini AI",
            "Chrome Extension": "Universal job detection capabilities with intelligent web scraping",
            "Real-time Synchronization": "Seamless backend API integration for job application management",
            "Multi-Email Integration": "Gmail and Outlook integration with OAuth2 authentication",
            "Automated Job Extraction": "Intelligent web scraping from any job website",
            "Job Status Tracking": "Automated status updates and progress monitoring",
            "Secure Authentication": "OAuth2 authentication and secure token management",
            "Universal Job Detection": "Chrome extension that works on any job website"
        }
        self.techStack = {
            "Frontend": "React.js, TypeScript",
            "Backend": "Node.js",
            "Database": "PostgreSQL",
            "Containerization": "Docker",
            "AI Integration": "Google Gemini AI API",
            "Email APIs": "Gmail API, Outlook API",
            "Authentication": "OAuth2",
            "Browser Extension": "Chrome Extension API"
        }
        self.challenges = {
            "Universal Web Scraping": "Developing intelligent scraping that works across diverse job websites",
            "Email Integration": "Implementing OAuth2 authentication for multiple email providers",
            "Real-time Sync": "Ensuring seamless synchronization between Chrome extension and backend",
            "AI Integration": "Optimizing Google Gemini AI for accurate email content analysis"
        }
        self.achievements = [
            "Produced a Full-stack job tracking platform with AI-powered email parsing, Chrome extension integration, and automated job data extraction from any website",
            "Developed a chrome extension with universal job detection capabilities, intelligent web scraping, and real-time synchronization with backend API for seamless job application management",
            "Integrated Gmail, Outlook, and Google Gemini AI API's for intelligent email content analysis and automated job status updates with OAuth2 authentication and secure token management"
        ]
    
    def get_project_summary(self) -> str:
        return f"{self.name} - {self.role}. {self.description}"
    
    def get_achievements_summary(self) -> str:
        return f"Key achievements: {len(self.achievements)} major accomplishments including AI-powered email parsing, Chrome extension development, and multi-platform integration."
    
    def get_technical_highlights(self) -> dict:
        return {
            "AI Integration": "Google Gemini AI for intelligent email analysis",
            "Browser Extension": "Universal Chrome extension with web scraping",
            "Multi-Platform": "Gmail, Outlook, and custom API integration",
            "Real-time Sync": "Seamless backend synchronization",
            "Security": "OAuth2 authentication and secure token management",
            "Full Stack": "React.js frontend with Node.js backend"
        }
    
    def get_complexity_score(self) -> int:
        """Return a complexity score based on the technical challenges"""
        return 9  # High complexity due to AI integration, browser extension, and multi-platform APIs