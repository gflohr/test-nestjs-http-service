/* istanbul ignore file */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const appService = app.get(AppService);
	appService.getUniversities(process.argv[2])
		.subscribe({
			next: () => {},
			error: console.error,
			complete: () => app.close(),
		});
}
bootstrap();
