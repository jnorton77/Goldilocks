require 'spec_helper'

describe User do
  it { should have_many(:responses) }
  it { should have_many(:heart_rates)}
  it { should have_one(:cohort)}
end
