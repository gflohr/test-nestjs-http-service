import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { of } from 'rxjs';
import { AppModule } from './../src/app.module';
import { AppService } from './../src/app.service';
import { UniversitiesService } from './../src/universities/universities.service';
import { University } from './../src/universities/university.interface';

describe('AppController (e2e)', () => {
	let app: INestApplication;
	let appService: AppService;
	const universitiesService = {
		findByCountry: jest.fn(),
	};

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		})
		.overrideProvider(UniversitiesService)
		.useValue(universitiesService)
		.compile();

		app = moduleFixture.createNestApplication();
		await app.init();
		appService = moduleFixture.get<AppService>(AppService);
	});

	it('should print the universities of Lalaland', async () => {
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

		const findByCountrySpy = jest
			.spyOn(universitiesService, 'findByCountry')
			.mockImplementation(() => {
				return of(data);
			});

		const logSpy = jest
			.spyOn(global.console, 'log')
			.mockImplementation(() => {});

		await appService.getUniversities('Lalaland');

		expect(findByCountrySpy).toHaveBeenCalledTimes(1);
		expect(logSpy).toHaveBeenCalledTimes(1);
		expect(logSpy).toHaveBeenCalledWith(data);
	});
});
