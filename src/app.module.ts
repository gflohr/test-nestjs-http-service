/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import { UniversitiesModule } from './universities/universities.module';
import configuration from './config/configuration';
import { UniversitiesService } from './universities/universities.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration],
		}),
		UniversitiesModule,
		HttpModule,
	],
	controllers: [],
	providers: [AppService, UniversitiesService],
})
export class AppModule {}
