import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { UniversitiesService } from './universities.service';

describe('UniversitiesService', () => {
	let service: UniversitiesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				UniversitiesService,
				{
					provide: HttpService,
					useValue: {
						post: jest.fn(),
					},
				},
			],
		}).compile();

		service = module.get<UniversitiesService>(UniversitiesService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
