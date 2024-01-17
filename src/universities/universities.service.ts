import { Injectable, Logger } from '@nestjs/common';
import { Observable, map, of } from 'rxjs';
import { University } from './university.interface';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UniversitiesService {
	private readonly baseUrl: string;
	private readonly logger = new Logger(UniversitiesService.name);

	constructor(
		private readonly configService: ConfigService,
		private readonly httpService: HttpService,
	) {
		this.baseUrl = configService.get('universities.baseUrl') as string;
	}

	findByCountry(country: string): Observable<University[]> {
		if (null == country) {
			this.logger.error('no country specified');
			return of([]);
		}
		this.logger.log(`getting universities for ${country}`);
		const url = new URL(this.baseUrl);
		url.pathname = '/search';
		url.search = '?country=' + country;

		const o$ = this.httpService.get<University[]>(url.toString());
		return o$
			.pipe(map(response => response.data));
	}
}
