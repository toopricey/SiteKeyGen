openssl genrsa -out priv.pem 512

openssl rsa -in priv.pem -pubout -out pub.pem

openssl rsa -inform PEM -outform DER -pubin -pubout -in  pub.pem -out pub.der

openssl dgst -sign priv.pem -out sig.sha string.txt

Where:
	-priv.pem is your private key
	-pub.pem is your public key
	-pub.der is your DER representation fo the public key
	-sig.sha is the RSA/SHA signature of the Site string