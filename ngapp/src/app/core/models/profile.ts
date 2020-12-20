class Phone {
	countryCode: string;
	primary: string;
	secondary: string;
}

class Preferences {
	remote: boolean;
	freelancing: boolean;
	relocation: boolean;
	contractToHire: boolean;
}

class Location {
	address: string;
	postalCode: string;
	city: string;
	countryCode: string;
	region: string;
}

class SocialProfile {
	network: string;
	username: string;
	url: string;
}

class WorkProfile {
	company: string;
	position: string;
	website: string;
	location: string;
	isCurrentRole: boolean;
	startDate: string;
	endDate: string;
	start: YearMonth;
	end: YearMonth;
	summary: string;
	highlights: Array<string>;
}

class EducationSummary {
	institution: string;
	location: string;
	areaOfStudy: string;
	studyType: string;
	startDate: string;
	endDate: string;
	completed: boolean;
	start: YearMonth;
	end: YearMonth;
	description: string;
	activites: any | Array<any>;
	gpa: string | number;
	courses: Array<string>;
}

class Basics {
	name: string;
	label: string;
	picture: string;
	email: string;
	phone: Phone;
	website: string;
	yearsOfExperience: number;
	birthDate: string;
	birthPlace: string;
	gender: string;
	nationality: string;
	summary: Array<string>;
	preferences: Preferences;
	currentLocation: Location;
	profiles: Array<SocialProfile>;
}

class SkillInfo {
	name: string;
	level: string;
	rating: number;
	yearsOfExperience: number;
	keywords: Array<string>;
}

class ProjectInfo {
	title: string;
	organisation: string;
	summary: string;
	timeSpan: {
		start: string;
		end: string;
	}
	technologies: Array<string>;
}

class LangInfo {
	language: string;
	fluency: string;
	level: number;
}

class Interest {
	name: string;
	keywords: Array<string>;
}

class Reference {
	name: string;
	testimonial: string;
	designation: string;
	organisation: string;
}

export class Profile {
	basics: Basics;
	work: Array<WorkProfile>;
	volunteer: Array<any>;
	education: Array<EducationSummary>;
	awards: Array<any>;
	publications: Array<any>;
	skills: Array<SkillInfo>;
	projects: Array<ProjectInfo>;
	languages: Array<LangInfo>;
	interests: Array<Interest>;
	references: Array<Reference>;
}
