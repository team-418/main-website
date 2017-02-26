require 'test_helper'

class StyleGuideControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
