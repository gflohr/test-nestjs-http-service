import { BadRequestException, Injectable } from '@nestjs/common';
import { Observable, map, of } from 'rxjs';
import { University } from './university.interface';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UniversitiesService {
	private readonly baseUrl: string;

	constructor(
		private readonly configService: ConfigService,
		private readonly httpService: HttpService,
	) {
		this.baseUrl = configService.get('universities.baseUrl') as string;
	}

	findByCountry(country: string): Observable<University[]> {
		console.log(`country: ${country}`);
		if (null == country) {
			throw new BadRequestException('no country specified');
		}
		const url = new URL(this.baseUrl);
		url.pathname = '/search';
		url.search = '?country=' + country;

		const o$ = this.httpService.get<University[]>(url.toString());
		return o$
			.pipe(map(response => response.data));
	}
}
