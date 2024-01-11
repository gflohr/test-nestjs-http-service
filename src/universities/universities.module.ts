import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';

@Module({
	providers: [UniversitiesService],
})
export class UniversitiesModule {}
