from abc import ABC, abstractmethod
from typing import List, Dict, Optional

class Project(ABC):
    """
    Abstract base class for all projects.
    Defines the common structure and interface that all projects must implement.
    """
    
    def __init__(self, name: str, status: str, dates: str, role: str, description: str):
        """
        Initialize a project with common attributes.
        
        Args:
            name (str): Name of the project
            status (str): Current status (e.g., "Completed", "In Progress", "On Hold")
            dates (str): Project timeline (e.g., "January 2024 - May 2024")
            role (str): Your role in the project
            description (str): Brief description of the project
        """
        self.name = name
        self.status = status
        self.dates = dates
        self.role = role
        self.description = description
        self.organization: Optional[str] = None
        self.teamates: List[str] = []
        self.features: Dict[str, str] = {}
        self.techStack: Dict[str, str] = {}
        self.challenges: Dict[str, str] = {}
        self.github_link: Optional[str] = None
        self.live_link: Optional[str] = None
        self.impact: Dict[str, str] = {}
        
    @abstractmethod
    def get_project_summary(self) -> str:
        """
        Return a brief summary of the project.
        Must be implemented by subclasses.
        """
        pass
    
    def get_tech_stack_summary(self) -> str:
        """Return a formatted string of the technology stack."""
        if not self.techStack:
            return "No technology stack specified"
        
        tech_list = [f"{category}: {tech}" for category, tech in self.techStack.items()]
        return ", ".join(tech_list)
    
    def get_features_summary(self) -> str:
        """Return a formatted string of the project features."""
        if not self.features:
            return "No features specified"
        
        feature_list = [f"{feature}: {description}" for feature, description in self.features.items()]
        return "; ".join(feature_list)
    
    def get_team_size(self) -> int:
        """Return the size of the team (including yourself)."""
        return len(self.teamates) + 1 if self.teamates else 1
    
    def is_completed(self) -> bool:
        """Check if the project is completed."""
        return self.status.lower() in ["completed", "finished", "done"]
    
    def is_in_progress(self) -> bool:
        """Check if the project is currently in progress."""
        return self.status.lower() in ["in progress", "ongoing", "active"]
    
    def get_duration(self) -> str:
        """Return the project duration."""
        return self.dates 