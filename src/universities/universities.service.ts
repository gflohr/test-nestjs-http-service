import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { University } from './university.interface';

@Injectable()
export class UniversitiesService {
	findByCountry(country: string): Observable<University[]> {
		return of([]);
	}
}
