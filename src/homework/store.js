import { observable, action } from 'mobx';
import { database } from '../firebase';


class homeworkStore {

  @observable
  homework = {
    items: []
  };
  
  @observable
  params = {
    page: 1,
    sort: 'asc',
    limit: 10
  };
  
  @observable
  homework_data = {
    name: '',
    description: ''
  };
  
  @action
  submitAddHomework = async () => {
    database.ref('homework').push(this.homework_data);
  };

  @action
  fetchHomeWork = async () => {};
}

const store = new homeworkStore();

export default store;
