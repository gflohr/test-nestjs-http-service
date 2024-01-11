import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { UniversitiesService } from './universities.service';

@Module({
	imports: [ConfigModule, HttpModule],
	providers: [UniversitiesService],
})
export class UniversitiesModule {}
