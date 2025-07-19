from abc import ABC, abstractmethod
from typing import List, Optional
from Projects.Project import Project

class Experience(ABC):
    """
    Abstract base class for all work experiences.
    Provides common interface and functionality for all experience classes.
    """
    
    def __init__(self, name: str, location: str, dates: str, role: str, project: Project = None, manager: List[str] = None):
        """
        Initialize an experience with common attributes.
        
        Args:
            name (str): Name of the organization/company
            location (str): Location of the position
            dates (str): Employment timeline (e.g., "May 2024 - Present")
            role (str): Your role/title at the organization
            project (Project, optional): Main project worked on during this experience
            manager (List[str], optional): List of managers/supervisors
        """
        self.name = name
        self.location = location
        self.dates = dates
        self.role = role
        self.project = project
        self.manager = manager or []
        self.achievements: List[str] = []
        self.skills_developed: List[str] = []
    
    @abstractmethod
    def get_experience_summary(self) -> str:
        """
        Return a brief summary of the experience.
        Must be implemented by subclasses.
        """
        pass
    
    def get_duration(self) -> str:
        """Return the employment duration."""
        return self.dates
    
    def get_managers(self) -> List[str]:
        """Return list of managers/supervisors."""
        return self.manager
    
    def add_achievement(self, achievement: str) -> None:
        """Add an achievement to the experience."""
        self.achievements.append(achievement)
    
    def add_skill(self, skill: str) -> None:
        """Add a skill developed during this experience."""
        self.skills_developed.append(skill)
    
    def get_achievements(self) -> List[str]:
        """Return list of achievements."""
        return self.achievements
    
    def get_skills_developed(self) -> List[str]:
        """Return list of skills developed."""
        return self.skills_developed
    
    def get_project_info(self) -> Optional[Project]:
        """Return the main project information."""
        return self.project
    
    def get_tech_stack(self) -> List[str]:
        """Get all technologies used across projects."""
        if self.project and hasattr(self.project, 'techStack'):
            return list(self.project.techStack.values())
        return []
    
    def get_organization_summary(self) -> str:
        """Return a summary of the organization."""
        return f"{self.name} - {self.location}"
    
    def get_role_info(self) -> str:
        """Return role information."""
        return f"{self.role} ({self.dates})" 