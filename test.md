# Linux Notes

## Introduction

Linux has a GUI just like Windows and OSX and it operates in basically the same manner as other OS's. These notes will focus on the command line running bash. GUI's are great and have many uses, and learning about the command line should not keep you from using GUIs. You should instead start using the command in conjunction with them. You can open up as many terminals as you like and have many commands running at once. One good setup is 3 command lines 1. for working 2. for ancillary data  and 3. for man pages

## What is a Command Line ?

A command line, also called a terminal, is a text based interface providing access to your system. They present you with a **prompt** that allows you to type in **commands** followed usually followed by **arguments**. The command and all of it arguments must be separated by a single space.

```
1. Joshuas-MacBook-Air:linux-lesson joshuacannon$ ls -al
2. total 0
3. drwxr-xr-x  4 joshuacannon  staff  128 Feb  2 20:45 .
4. drwx------@ 8 joshuacannon  staff  256 Feb  2 20:44 ..
5. -rw-r--r--  1 joshuacannon  staff    0 Feb  2 20:45 bash-script0
6. drwxr-xr-x  2 joshuacannon  staff   64 Feb  2 20:45 some-other-dir
7. Joshuas-MacBook-Air:linux-lesson joshuacannon$ 
```
In line 1. we are given a prompt `Joshuas-MacBook-Air:linux-lesson joshuacannon$` followed by a command `ls` and one argument `-al` this first arguments is also called and option and changes the way that the command behaves 

In Lines 2 - 6. the terminal prints the results of the command in the terminal also called **standard output** 

Finally in Line 7.  we are again prompted for further commands 

The **shell** is part of the operating systems that determines how the terminal behaves  and the how the output of your commands is displayed. Not the same thing as your terminal or command line. You can switch between shells in the same terminal session.

## Navigating The File System
The first part of navigation is knowing where you are currently. The command for this is `pwd` which stands for print working directory. It simply tell you where you current are working inside your file system
```
1. Joshuas-MacBook-Air:linux-lesson joshuacannon$ pwd
2. /Users/joshuacannon/Documents/linux-lesson
3. Joshuas-MacBook-Air:linux-lesson joshuacannon$ 
```
Line 3. is the absolute path to your working directory

Now that we know where we are the next thing we want to figure out is where we can go from here. We can do that with the `ls` command which stands for list. This command will list all the files and directories inside of our current working directory

```
1. Joshuas-MacBook-Air:linux-lesson joshuacannon$ ls
2. bash-script0	some-other-dir
3. Joshuas-MacBook-Air:linux-lesson joshuacannon$ 
```
The `ls` command is more powerful than `pwd`. We can give it arguments to control how it behaves. The format of a full `ls` command is:
```
ls [options] [location]
```
The brackets mean that these are optional arguments here an example of how to use `ls` with arguments 
```
1. Joshuas-MacBook-Air:Documents joshuacannon$ ls -l linux-lesson/
2. total 0
3. -rw-r--r--  1 joshuacannon  staff   0 Feb  2 20:45 bash-script0
4. drwxr-xr-x  2 joshuacannon  staff  64 Feb  2 20:45 some-other-dir
5. Joshuas-MacBook-Air:Documents joshuacannon$ 
```
In line 1. we ran the `ls` command with `-l` or long option and the location we would like to look in `linux-lesson`

Line 2. lists the total number of memory blocks occupied by the directory

Line 3. tells us the extra information we asked for by using the `-l` option
* The first character of line 3 denotes whether the item is a file `-` or directory `d`. 
* The next 9 characters tell us about the permissions of the file or directory. 
* The next field tells us the number of memory block occupied by the file
* The next field is the owner `joshuacannon` in this case
* The next field is the group the file belongs too `staff` here
* The next field is file size
* Then modification date
* Finally the name of the file or directory

Now that we know where we are and where we can go from here. The next thing we need to know is how to get there. That is where **paths** come in. There are two types of paths we use to describe where we want to go in the file system. **relative paths** and **absolute paths**

1. Absolute paths always start with a `/` and specify a location relative to the root directory
2. Relative paths do not start with a `/` and specify a location relative our current location

Some building blocks for paths
* `~` the tilde represents your home directory `cd ~` will take you to your home directory, but it it such a common command you can just drop the tilde. The `cd` command with not arguments will take you home.

* `.` The dot represents your current directory. `cd .` will keep keep you in your current directory

* `..` The dotdot represents the directory that is one level above you in the file system hierarchy. Your parent directory

```
1. Joshuas-MacBook-Air:linux-lesson joshuacannon$ pwd
2. /Users/joshuacannon/Documents/linux-lesson
3. Joshuas-MacBook-Air:linux-lesson joshuacannon$ cd
4. Joshuas-MacBook-Air:~ joshuacannon$ pwd
5. /Users/joshuacannon
6. Joshuas-MacBook-Air:~ joshuacannon$ cd ~
7. Joshuas-MacBook-Air:~ joshuacannon$ pwd
8. /Users/joshuacannon
9. Joshuas-MacBook-Air:~ joshuacannon$ cd .
10. Joshuas-MacBook-Air:~ joshuacannon$ pwd
11. /Users/joshuacannon
12. Joshuas-MacBook-Air:~ joshuacannon$ cd ..
13. Joshuas-MacBook-Air:Users joshuacannon$ pwd
14. /Users
```

the above terminal output shows how the ~, ., and .. will help you move through the filesystem

lines 1 - 2. print our current working directory
lines 3 - 5. move to home directory using the `cd` command with no argument
lines 5 - 8. we get the same result as above when we use `cd` with the tilde
lines 9 - 11. using the `cd` command with a dot keeps us in the same directory
lines 12 - 14 using the the .. moves us to the parent directory

Quick Tip: You type in paths using tab completion. Type the first few letters of where you are trying to go then hit tab and the terminal will auto-complete the path for you. If it doesn't work then there are either no options or more than one possible. Hit tab again to see your choices.

## Things I want to know more about

* How files work in linux  

**resources:**
* [Linux Tutorial](https://ryanstutorials.net/linuxtutorial/navigation.php)
