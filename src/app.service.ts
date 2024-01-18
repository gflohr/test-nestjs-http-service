/* istanbul ignore file */
import { Injectable } from '@nestjs/common';
import { UniversitiesService } from './universities/universities.service';
import { first } from 'rxjs';

@Injectable()
export class AppService {
	constructor(private universitiesService: UniversitiesService) {}

	getUniversities(country: string): Promise<void> {
		return new Promise((resolve, reject) => {
			this.universitiesService
				.findByCountry(country)
				.pipe(first())
				.subscribe({
					next: console.log,
					complete: () => resolve(),
					error: (err) => reject(err),
				});
		});
	}
}
