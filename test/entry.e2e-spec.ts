import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { CreateEntryDto } from '../src/entry/dto/create-entry.dto';

describe('EntryController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('/ (POST) entry controller ',()=> {

    it('should create a new entry with valid data', async () => {
        const validEntry = new CreateEntryDto(100, new Date(), "DKK", "pizza", "bad for economy");

        const {body} = await request(app.getHttpServer())
        .post('/entry')
        .send(validEntry)
        .expect(201)

        expect(body.amount).toEqual(100);
        expect(body.id).toBeDefined();
        console.log(body);

      });
  })
});
