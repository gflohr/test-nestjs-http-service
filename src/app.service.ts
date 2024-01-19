/* istanbul ignore file */
import { Injectable } from '@nestjs/common';
import { UniversitiesService } from './universities/universities.service';
import { Observable, first, tap } from 'rxjs';
import { University } from './universities/university.interface';

@Injectable()
export class AppService {
	constructor(private universitiesService: UniversitiesService) {}

	getUniversities(country: string): Observable<University[]> {
		return this.universitiesService
			.findByCountry(country)
			.pipe(
				tap(console.log)
			);
	}
}
