import { observable, action } from 'mobx';

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

  @action
  fetchHomeWork = async () => {};
}

const store = new homeworkStore();

export default store;
