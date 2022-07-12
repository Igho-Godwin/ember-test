import DS from 'ember-data';
import { attr } from '@ember-data/model';

export default class QuestionnaireModel extends DS.Model {
  @attr('string')
  declare identifier: string;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    questionnaire: QuestionnaireModel;
  }
}
