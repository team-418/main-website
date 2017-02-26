require 'test_helper'

class TimePeriodsControllerTest < ActionController::TestCase
  setup do
    @time_period = time_periods(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:time_periods)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create time_period" do
    assert_difference('TimePeriod.count') do
      post :create, time_period: { end_date: @time_period.end_date, start_date: @time_period.start_date }
    end

    assert_redirected_to time_period_path(assigns(:time_period))
  end

  test "should show time_period" do
    get :show, id: @time_period
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @time_period
    assert_response :success
  end

  test "should update time_period" do
    patch :update, id: @time_period, time_period: { end_date: @time_period.end_date, start_date: @time_period.start_date }
    assert_redirected_to time_period_path(assigns(:time_period))
  end

  test "should destroy time_period" do
    assert_difference('TimePeriod.count', -1) do
      delete :destroy, id: @time_period
    end

    assert_redirected_to time_periods_path
  end
end
