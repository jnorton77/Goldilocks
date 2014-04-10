# When the Rack::Timeout limit is hit, it closes the requests and generates
# a stacktrace in the logs that can be used for future debugging of long running code.

#On Ruby 1.9/2.0, Rack::Timeout uses Ruby’s stdlib Timeout library which can be unreliable.
# Heroku recommends using Rack::Timeout and setting the unicorn timeout (in config/unicorn.rb). If using both timeout systems,
# the Rack::Timeout value should be lower than the unicorn timeout if you plan on using the stack trace
# produced by Rack::Timeout for debugging.

Rack::Timeout.timeout = 10  # seconds