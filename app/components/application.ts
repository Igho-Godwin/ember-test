import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

interface IndexArgs {}

export default class Application extends Component{
    //@service declare store: any
    get  questionnaire(){
      //const data  =  this.store.findAll('questionnaire');
      console.log(4)
      return 3
    }
}