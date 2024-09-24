# Notes for CS 260

## Console Commands to know
- All these Commands are POSIX compliant

|              Command              |                                       Description                                       |
| :-------------------------------: | :-------------------------------------------------------------------------------------: |
|                ls                 |                        Lists all files in the current directory                         |
|              ls -la               |                   List all files the extra info and list hidden files                   |
|                pwd                |                              Prints the current directory                               |
|                cd                 |                                    Changes directory                                    |
|               cd ..               |                                  Go back one directory                                  |
|       cd My/Next/Directory        |                   Path to next directory from your current directory                    |
|               mkdir               |                                   Make new directory                                    |
|               rmdir               |                           Remove directory (**permanently**)                            |
|                rm                 |                             Remove files (**permanently**)                              |
| mv current.file new/file/location |                                       Move files                                        |
|                cp                 |                   Copy file (nice for making backups of Caddy files)                    |
|               curl                |                      Command line URL Browser (returns html file)                       |
|               grep                |                         Searches text using regular expressions                         |
|               find                |                                   Finds file location                                   |
|                top                |                 'Table of Processes' lists currently running processes                  |
|                ps                 |                            View currently running processes                             |
|                cat                |                     Outputs contents of a file to the command line                      |
|          less or vi(vim)          |   Interactively see and edits contents of a file (Like Word with keyboard shortcuts)    |
|                wc                 |                                       Word count                                        |
|               kill                |                            Kill currently running processes                             |
|               sudo                |               Act as the 'Super User' or admin **Very Danger Be Careful**               |
|                ssh                |                    Create a secure shell to a remote computer/server                    |
|               exit                |                                 Exit your ssh instance                                  |
|                scp                |                        Securely copy files to a remote computer                         |
|              history              |                                Show the command history                                 |
|               ping                |                             Check to see if a website is up                             |
|              tracert              |                              Trace connection to a website                              |
|                dig                |                              Show to DNS info for a domain                              |
|                man                |                        'Manual' looks up a command in the manual                        |
|                \|                 | 'Pipe' takes output of left command and passes it to the right command (can be chained) |
|                 >                 |                 Redirect the output of a file (will ovewrite the file)                  |
|                >>                 |             Redirects the output of a file (appends to the end of the file)             |

- Useful keystrokes

| Keystroke |                          Description                          |
| :-------: | :-----------------------------------------------------------: |
|  CTRL-R   |            Use type ahead to find previous command            |
|  CTRL-C   | Kill currently running command **SUPER USEFUL AND IMPORTANT** |
|    TAB    |   Can be used to autocomplete file/directory you are typing   |

- Vim (Useful but has a slight learning curve)

| Keystroke |                   Description                    |
| :-------: | :----------------------------------------------: |
|    :h     |                       Help                       |
|     i     |                 Insert into text                 |
|     u     |                       undo                       |
|  CTRL-r   |                       redo                       |
|    ESC    |         Exit current mode (like insert)          |
|    :e     |             Open a file or directory             |
|    :q     |                    Quits vim                     |
|    :q!    |               Quit without saving                |
|    :w     |        'Writes' or saves changes to file         |
|    :wq    |               Saves and quits vim                |
|    gg     |            Go to the top of the file             |
|     G     |            Go to the end of the file             |
|     /     | Search for the text you type following the slash |
|     n     |                Next search match                 |
|     N     |              Previous search match               |
|     v     |               Visually select text               |
|     y     |         'Yank' or copy text to clipboard         |
|     p     |               Paste from clipboard               |
|  CTRL-wv  |              Split window verically              |
|  CTRL-ww  |                  Toggle windows                  |
|  CTRL-wq  |               Close current window               |
## Git & GitHub
- it is easiest to create a repo on GitHub then clone it than push a new repo to GitHub
- clone from GitHub 
   - `git clone https://github.com/url-to-repo-on-github`
- add files to git
    - `git add file.name`
- commit, add, and add message to git
    - `git commit -am "my comments here with proper etiquette:`
- send edits to GitHub
    - `git push`
- check for changes on GitHub
    - `git fetch`
    - `git status`
- when merging, you must review the conflict before finishing the merge

### GitHub forks and pull request
- you can create a fork to a GitHub repo to edit the files independent of the main branch
    - this is how the open source community developes software
- when you fork a repo and want to add your fork back to the main branch, you can make a pull request
    - this notifies the repo owner that you want to make a change
    - they will either approve it or deny it

## Tech Stack
- The tech stack is the services, applications, and all tools used to create a fully functioning website
- Our stack
    - _React_ - Web Framework
    - _Caddy_ - Certificates
    - _AWS_ - Server host
    - _NodeJS_ - Backend
    - _MongoDB_ - Data Base
        - Hosted on MongoDB Atlas
- There is no one right tech stack, just different advantages and disadvantages
    - Dependability, support, scalability, performance, and security are all important factors

## AWS 
### EC2
- Creating an instance
    - Log into AWS and select EC2 and launch instance
    - Name instance and select instance type
        - You can also select an 'Amazon Machine Image' to create a web server with a preinstalled tech stack
    - Make a key pair
        - This is used to ssh into your server so never share it to any public location like GitHub
    - You have to create a security group exposing the ports you want your project to use
        - Typical
            - SSH, HTTP, HTTPS with traffic coming from anywhere
    - Once all this is set up, you should be able to find your public IP address, type it into your browser, and see your website
    - To keep your public IP consistent you will need to set up an elastic IP
        - You can do this by navigating to the elastic IP menu
        - Select 'Allocate Elastic IP Address'
        - Then 'Allocate'
        - 'Actions'
        - 'Associate Elastic IP address'
        - 'Instance'
        - 'Associate'
- SSH into your server
    - Common commands
        - `ssh -i [key pair file] ubuntu@[ip address]`
            - the key pair file will be the file you created when you set up your instance
            - IP address is your public IP address
        - `chmod  600 [key pair file]`
            - AWS sometimes doesn't like how public your key pair file is
            - This command changes your file's accessibility
                - `600` mean the file owner can read and write to this file, 6, but others in your group or other users in general cannot
                - Don't worry too much about this ^^^
        
### Route 53
- You can purchase a domain name to register with a DNS server and apply it to an IP address
- To register a domain
	- Navigate to Route 53
	- `Domains > Registered Domain`
	- Select `Register Domain`
	- Check to see if your desired domain is available
		- different `.whatevers` cost different amounts
	- `Add to cart` and checkout
	- It can take up to 48 hours for your domain to be registered but typically take less time
	- After you have completed registration, you can use `whois` in the console to see all this information
		- `whois` might need to be installed using `sudo apt install whois`
		- You don't need this but it can be fun. Might have to mess with the Ubuntu kernel though so if you are not comfortable with that, **Don't do it**
- Create a hosted zone
	- Navigate to Route 53
	- Select `Hosted Zone`
	- Find your domain name
		- If it doesn't appear then you can go to `Domains > Pending Request`
		- Your domain should already have DNS records of types `NS` and `SOA`
	- Go to `Create Record` and enter your IP address (make sure you have an elastic IP address or your domain name and current IP can disconnect)
	-  Press `Create Records` and create a new `A` record with your domain name
		- This domain will go to your root domain and connect directly to your IP
		- You can also create a `*.your.domain` style domain to go to any subdomain you will create
- Record types
	- `A` records show the IP address your domain will direct to
	- `NS` is the name server record that list the names of the authoritative DNS servers that verify you can place this record in a given DNS server
	- `SOA` is the 'start of authority' or the contact information for the domain owner

## Caddy
- Caddy is the software/service we use to handle and rotate web certificates
	- Serves all static: HTML, CSS, and JavaScript
	- Acts as a gate to all subdomains
- **If you start messing with your Caddy file, make a backup in case you screw up and can't fix it**
	- use `cp Caddyfile backup_Caddyfile` to create a backup file
### Important Caddy files
- Configuration file: `~/Caddyfile`
	- Routes HTTP requests
	- Determines location of static HTPS files
	- Handles proxy requests other services
- HTML file: `~/public_html`
	- Directory of files that Caddy will serve
	- Looks like this where the `root` shows the path to the directory that Caddy will look for when you use the `/file.name` at the end of your URL
		- i.e. `file.name` is in the public html directory and is served when you type in `https://mywebsite.com/file.name`
```
:80 {
	root * path/to/html/directory
	file_server
}
```



## Web Certificates 
### HTTP & HTTPS
- HTTP is an old, non-secure, way of connecting to websites
	- HyperText Transfer Protocol
	- Not secure because security use to be too much of a hassle and not typically needed
	- Part of 'Web 1.0' which mainly served static sites that didn't have a backend
	- Anyone could track network traffic and see what data you were sending
- HTTPS is much like HTTP but with the added security
	- HTTP Secure
	- Critical to the development of 'Web 2.0' which is what we're in right now
		- Dynamic web applications
	- Encrypted with TLS protocol
### TLS
- The successor to, and sometimes still referred to as, SSL
- Works by negotiating a shared secret between two computers
	- This is used to encrypt the data
- You can see this happen if you use `curl -v` in a console
	- The `-v` flag means 'verbose' and gives you more information
- The 'handshake' is the exchange of web certificates that identifies the domain name of the server
	- This creates the secure connection
	- The browser checks that the domain name on the certificate matches the domain name in the browser's search bar
		- If they are the same then it is accepted
### Web Certificates
- Web certificates are created by a trusted 3<sup>rd</sup> party using public/private key encryption
- It use to cost hundreds of dollars a year to get a web certificate
	- In 2014, a non-profit called <ins>Let's Encrypt</ins> created trusted web certificates for free
	- This was important to democratize the web
	- <ins>Let's Encrypt</ins> also pioneered the 'ACME protocol', an IETF standard
- Every time an HTTPS request to a domain name Caddy doesn't have a certificate for, Caddy will work with Let's Encrypt to create a new web certificate
- Unless specified, if your domain is typed into a Caddy enabled server, Caddy will automatically port it to HTTPS, port 443
- You can obtain and renew a web certificate by enabling the ACME protocol for your web server and communicating with Let's Encrypt
	- Many modern programing languages, like Rust, Node.js, or Go, support this by including an additional library

## Editors
- For web programing, you will need a code editor
- Deeply learning a good editor makes you efficient, flexible, and reduces frustration
- The ones we use for this course are
	- Visual Studio Code (a desktop application)
	- VI/Vim (a console application)
	- less (another console application)
		- More of a light weight file viewer
	- pico (a console application)
		- use `nano file.name` to use pice/nano
		- Not used in this course but might be an easier beginner app
### Visual Studio Code
- Created by Microsoft and is supported by a large community of source developers
	- Also it's free so can't beat that
- One of the top IDEs on the market and is used by at least 71% of devs
- Default Features
	- File view
	- Git support
	- Auto-formating
	- Auto-suggestions
	- JavaScript debugging
- It is easy to find and install extensions to customize what services you want/need
- Some great extensions to have for web development
	- <ins>Live Server</ins> - This is a great way to create a development server on your computer and test out your code before you push it to your server
	- <ins>GitLens</ins> - This allows you to get the most out of git by making the basic functions of git easier to execute
### Vim/VI
- Vim is a console based text editor and is one of the oldest out there
- Vim is installed on every Linux server so it is a skill that is extremely useful
- Because of its...tenure...there are an abundance of tutorials out there for whatever your preferred learning style
	- In the console, you can even type `vimtutor` to learn
### Less
- Is not a text editor but a text viewer
- It offers many great features for exploring files
	- Especially large files

## HTML
### Structure
- HTML provides structures to websites
- Common HTML structural elements: `body`, `header`, `footer`, `main`, `section`, `aside`, `p`, `table`, `ol/ul`, `div`, and `span`
- The top level element is the `body`
	- x
- `body` has 3 children or subelements 
	- `header`, `main`, and `footer`
- The `header` contains
	- `p` - paragraphs
	- `span` 
	- `nav` - navigation containing `div`
	- `div` - divisions of sub-content
- The `footer` has a content division with a single span
- Example
```
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>
```
- There are two different flavors of structure elements: block and inline
	- Block elements signify distinct blocks in the content structure
	- Inline elements are meant to be in the content flow of a block element
	- ex
```
<div>He said <b>don't</b> cross the beams.</div>

<p>Authors such as <span>ee cummings</span> often used unconventional structure.</p>
```
