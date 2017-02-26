class TimePeriodsController < ApplicationController
  before_action :set_time_period, only: [:show, :edit, :update, :destroy]
  clear_respond_to
  respond_to :json

  # GET /time_periods
  # GET /time_periods.json
  def index
    @time_periods = TimePeriod.all
  end

  # GET /time_periods/1
  # GET /time_periods/1.json
  def show
  end

  # GET /time_periods/new
  def new
    @time_period = TimePeriod.new
  end

  # GET /time_periods/1/edit
  def edit
  end

  # POST /time_periods
  # POST /time_periods.json
  def create
    @time_period = TimePeriod.new(time_period_params)

    if @time_period.save
      render :show, status: :created, location: @time_period
    else
      render json: @time_period.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /time_periods/1
  # PATCH/PUT /time_periods/1.json
  def update
    if @time_period.update(time_period_params)
      render :show, status: :ok, location: @time_period
    else
      render json: @time_period.errors, status: :unprocessable_entity
    end
  end

  # DELETE /time_periods/1
  # DELETE /time_periods/1.json
  def destroy
    @time_period.destroy
    format.json { head :no_content }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_time_period
      @time_period = TimePeriod.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: e.message.to_json, status: :not_found
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def time_period_params
      params.require(:time_period).permit(:start_date, :end_date)
    end
end
