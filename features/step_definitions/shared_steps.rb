Given "that the user has successfully loaded the website" do
  visit root_path
  @csrf_token = Nokogiri::HTML(page.html).css('meta[name="csrf-token"]').attr('content').value
end

