import { Injectable } from '@nestjs/common';
import { UniversitiesService } from './universities/universities.service';
import { first } from 'rxjs';

@Injectable()
export class AppService {
	constructor(private universitiesService: UniversitiesService) {}

	getUniversities(country: string): void {
		this.universitiesService
			.findByCountry(country)
			.pipe(first())
			.subscribe(console.log);
	}
}
