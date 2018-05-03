require 'sinatra'
require 'httparty'
require 'json'
require 'dotenv/load'

get '/:lat/:long.json' do
  content_type :json
  response = HTTParty.get("https://api.darksky.net/forecast/#{ENV["REACT_APP_DARK_SKY_API_KEY"]}/#{params[:lat]},#{params[:long]}")
  response.body
end
