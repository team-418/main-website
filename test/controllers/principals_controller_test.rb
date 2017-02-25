require 'test_helper'

class PrincipalsControllerTest < ActionController::TestCase
  setup do
    @principal = principals(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:principals)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create principal" do
    assert_difference('Principal.count') do
      post :create, principal: { created_at: @principal.created_at, institution_id: @principal.institution_id, last_updated_at: @principal.last_updated_at, user_id: @principal.user_id }
    end

    assert_redirected_to principal_path(assigns(:principal))
  end

  test "should show principal" do
    get :show, id: @principal
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @principal
    assert_response :success
  end

  test "should update principal" do
    patch :update, id: @principal, principal: { created_at: @principal.created_at, institution_id: @principal.institution_id, last_updated_at: @principal.last_updated_at, user_id: @principal.user_id }
    assert_redirected_to principal_path(assigns(:principal))
  end

  test "should destroy principal" do
    assert_difference('Principal.count', -1) do
      delete :destroy, id: @principal
    end

    assert_redirected_to principals_path
  end
end
