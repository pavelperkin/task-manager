require 'rails_helper'
RSpec.describe ProjectsController, :type => :controller do
  let!(:project) { create :project }

  describe "GET index" do
    before do
      get :index
    end

    subject { assigns(:projects) }

    it {is_expected.to eq([project])}
  end

  describe "GET show" do
    before do
      get :show, id: project
    end

    subject { assigns(:project) }

    it {is_expected.to eq(project)}
  end

  describe "POST create" do
    before do
      post :create, { project: new_attributes }
    end
    context "with valid params" do
      let(:new_attributes) { { title: 'Project Title' } } #valid

      subject { assigns(:project) }

      it "creates a new Project" do
        expect(Project.count).to eq 2
      end

      it { is_expected.to be_a Project }
      it { is_expected.to be_persisted }

      it "respond with status 201" do
        expect(response).to be_success
      end
    end

    context "with invalid params" do
      let(:new_attributes) { { title: nil } } #invalid

      subject { assigns(:project) }

      it { is_expected.to be_a_new Project }

      it { expect(response).to be_unprocessable}
    end
  end

  describe "PUT update" do
    before do
      put :update, { id: project, project: new_attributes}
    end

    context "with valid params" do
      let(:new_attributes) { { title: 'Project Title' } } #valid

      it "updates the requested project" do
        project.reload
        expect(project.title).to eq('Project Title')
      end

      it { expect(assigns(:project)).to eq(project) }
      it { expect(response).to be_success }
    end

    context "with invalid params" do
      let(:new_attributes) { { title: nil } } #invalid

      it { expect(assigns(:project)).to eq(project) }
      it { expect(response.status).to be(422) }
    end
  end

  describe "DELETE destroy" do
    before do
      delete :destroy, id: project
    end

    subject { response }

    it { is_expected.to be_success }

    it "destroys the requested project" do
      expect(Project.count).to be_zero
    end
  end
end
