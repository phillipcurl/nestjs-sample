import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { MathModule } from './math/math.module';
import { CatsModule } from './cats/cats.module';
import { HeroesGameModule } from './heroes/heroes.module';

@Module({
  modules: [AuthModule, EventsModule, MathModule, CatsModule, HeroesGameModule]
})
export class ApplicationModule {}
