import Component from '@glimmer/component';
import { service } from '@ember/service';
import DS from 'ember-data';
import Store from '@ember-data/store';
import QuestionnaireModel from '../models/questionnaire'

interface QuestionnaireArgs {}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class Questionnaire extends Component<QuestionnaireArgs> {
  @service declare store: Store;
  get questionnaire(): DS.PromiseArray<QuestionnaireModel> {
    console.log(5);
    console.log(this.store.findAll('questionnaire'));
    return this.store.findAll('questionnaire');
  }
}
