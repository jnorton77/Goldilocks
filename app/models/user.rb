class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, and :timeoutable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:facebook]
  validates_presence_of :email
  has_many :responses
  has_many :authorizations

  def self.new_with_session(params,session)
    if session["devise.user_attributes"]
      new(session["devise.user_attributes"], without_protection: true) do |user|
        user.attributes = params
        user.valid?
      end
    else
      super
    end
  end

 #  def self.from_omniauth(auth, current_user)
 #    authorization = Authorization.where(:provider => auth.provider, :uid => auth.uid.to_s, :token => auth.credentials.token, :secret => auth.credentials.secret).first_or_initialize
 #    if authorization.user.blank?
 #      user = current_user.nil? ? User.where('email = ?', auth["info"]["email"]).first : current_user
 #      if user.blank?
 #       user = User.new
 #       user.password = Devise.friendly_token[0,10]
 #       user.name = auth.info.name
 #       user.email = auth.info.email
 #       # auth.provider == "twitter" ?  user.save(:validate => false) :  concat this line and below to add Twitter
 #       user.save
 #     end
 #     authorization.username = auth.info.nickname
 #     authorization.user_id = user.id
 #     authorization.save
 #   end
 #   authorization.user
 # end

  def self.find_for_facebook_oauth(auth)
    where(auth.slice(:provider, :uid)).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name   # assuming the user model has a name
      user.image = auth.info.image # assuming the user model has an image
    end
  end

end
