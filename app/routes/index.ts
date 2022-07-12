import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import DS from 'ember-data';
import Store from '@ember-data/store';
import QuestionnaireModel from '../models/questionnaire';

export default class Index extends Route {
  @service declare store: Store;
  model(params: { id: string }): DS.PromiseArray<QuestionnaireModel> {
    console.log(5);
    console.log(this.store.findAll('questionnaire'));
    return this.store.findAll('questionnaire');
  }
}
