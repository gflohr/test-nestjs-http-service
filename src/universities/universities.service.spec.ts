import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestHeaders } from 'axios';
import { UniversitiesService } from './universities.service';
import { of } from 'rxjs';
import { University } from './university.interface';

const MOCK_URL = 'http://localhost/whatever';

describe('UniversitiesService', () => {
	let service: UniversitiesService;
	let httpService: HttpService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				UniversitiesService,
				{
					provide: HttpService,
					useValue: {
						get: jest.fn(),
					},
				},
				{
					provide: ConfigService,
					useValue: {
						get: () => MOCK_URL,
					}
				}
			],
		}).compile();

		service = module.get<UniversitiesService>(UniversitiesService);
		httpService = module.get<HttpService>(HttpService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('should return universities of Lalaland', () => {
		const data: University[] = [
			{
				name: 'University of Lalaland',
				alpha_two_code: 'LU',
				'state-province': null,
				domains: [ 'uni.ll' ],
				country: 'Lalaland',
				web_pages: [ 'http://www.uni.ll/' ]
			},
			{
				name: 'International Institute of Advanced Misanthropolgy',
				alpha_two_code: 'LL',
				'state-province': null,
				domains: [ 'iiam.ll' ],
				country: 'Lalaland',
				web_pages: [ 'http://www.iiam.ll/' ]
			},
		];

		const spy = jest
			.spyOn(httpService, 'get')
			.mockReturnValue(of({
				data,
				headers: {},
				config: {
					url: MOCK_URL,
					headers: {} as AxiosRequestHeaders,
				},
				status: 200,
				statusText: 'OK',
			})
		);

		const observer = {
			next: (universities: University[]) => {
				expect(universities.length).toBe(2);
				expect(universities[0].name).toBe('University of Lalaland');
			},
			error: (error: any) => expect(error).toBeNull,
			complete: () => {
				expect(spy).toHaveBeenCalledTimes(1);
			},
		};

		service.findByCountry('Lalaland').subscribe(observer);
	});
});
