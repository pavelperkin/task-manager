require 'rails_helper'
RSpec.describe TasksController, type: :controller do
  let(:project) { create :project}
  let!(:task) { create :task, project: project }

  describe "GET #index" do
    before do
      get :index, project_id: project
    end

    it { expect(assigns(:tasks)).to eq([task]) }
  end

  describe "GET #show" do
    before do
      get :show, id: task
    end

    it { expect(assigns(:task)).to eq(task) }
  end

  describe "POST #create" do
    before do
      post :create, task: new_attributes
    end

    context "with valid params" do
      let(:new_attributes) { { title: 'Task1', body: 'Task body', project_id: project } }

      it { expect(Task.count).to be 2 }
      it { expect(response).to be_success }

      subject { assigns(:task) }

      it { is_expected.to be_a Task }
      it { is_expected.to be_persisted }
    end

    context "with invalid params" do
      let(:new_attributes) { { title: nil, body: nil, project_id: nil } }

      subject { assigns(:task) }
      it { is_expected.to be_a_new Task }

      it { expect(response).to be_unprocessable }
    end
  end

  describe "PUT #update" do
    before do
      put :update, id: task, task: new_attributes
    end

    context "with valid params" do
      let(:new_attributes) { { title: 'Task1', body: 'Task body' } }

      it { expect(task.reload.title).to eq 'Task1' }
      it { expect(assigns(:task)).to eq(task) }
      it { expect(response).to be_success }
    end

    context "with invalid params" do
      let(:new_attributes) { { title: nil, body: 'Task body' } }

      it { expect(assigns(:task)).to eq(task) }
      it { expect(response).to be_unprocessable }
    end
  end

  describe "DELETE #destroy" do
    before do
      delete :destroy, id: task
    end

    it { expect(Task.count).to be_zero }
    it { expect(response).to be_success }
  end
end
