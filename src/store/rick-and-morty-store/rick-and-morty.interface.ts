export type statusType = "Alive" | "Dead" | "unknown";
export type genderType = 'Female' | 'Male' | 'Genderless' | 'unknown';

export interface ICharacter {
	id: number,
	image: string,
	name: string,
	origin: {
		name: string,
		url: string,
	},
	type: string,
	status: statusType,
	species: string,
	gender: genderType,
	location: {
		name: string,
		url: string,
	},
	episode: string[], // api path to episode by id
	url: string, // api path to data about character
}

export interface IEpisode {
	id: number,
	name: string,
	air_date: string,
	episdoe: string,
	characters: string[] // api path to character by id
	url: string, // api path to data about episode
}

// API interfaces

export interface IApiInfo {
	count: number, // number of results
	pages: number, // number of pages
	next: string, // api path to next page
	prev: string // api path to previous page
}

export interface IFiltersForCharacters {
	name?: string,
	status?: statusType | "",
	gender?: genderType | "",
}

export interface IFilteredCharactersApiParams extends IFiltersForCharacters {
	page: number,
}

export interface IApiCharactersResponse {
	info: IApiInfo,
	results: ICharacter[]
}

export interface IApiEpisodesResponse {
	info: IApiInfo,
	results: IEpisode[]
}