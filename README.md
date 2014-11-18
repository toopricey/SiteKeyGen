#About

This script is to automatically generate an AdBlockPlus site key for a given website.

#Script Overview

Creating an ABP site key consists of a 512 bit RSA key pair, and a string of 
site variables that is specific to the site the key is designed to work for.

In order, this script will generate a 512 bit RSA private key in PEM, extract a 
public key from it, and convert that public key into a DER representation.  It
will then take in a string and sign it with your private key.  The string a 
concatenated list of request variables, and consists of the URI, host and user
agent, each seperated by a NUL character.  

Further details on ABP sitekeys can be found here:
https://adblockplus.org/en/filters#sitekey_server

#Terminal Commands

Terminal commands to carry out the script are as follows:

To generate the initial private key, use the following command, where priv.pem
is the name of the output file containing your private key.

openssl genrsa -out priv.pem 512

To generate a public key from this private key, use the following command, where pub.pem is the name of the output file to contain you public key.

openssl rsa -in priv.pem -pubout -out pub.pem

To convert your problic key from a PEM to a DER format, use the following 
command, where pub.der is the name of the output file containing the public
key in the DER representation.

openssl rsa -inform PEM -outform DER -pubin -pubout -in  pub.pem -out pub.der

To sign your string of request variables, use the following command.  here, 
sig.sha is the output file containing your signed string, and string.txt
is the input file containing the string that is to be signed.

openssl dgst -sign priv.pem -out sig.sha string.txt