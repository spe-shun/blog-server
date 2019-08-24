# Git

## 发展历史

版本控制计算机普遍使用，比如Microsoft word 提供的Undo（ctrl+z）功能；我们在保存文件时使用文件名区分（file_v1.psd->file_v2.psd->file_v3.psd->file_v4.psd）

Git 提供版本控制系统VCS（version control system）帮助我们管理文件的改变，特别是文本文件。对于大部分使用来说，我们使用Git完成SCM（source code managment）。当我们拥有了不同版本的文件之后，通过Git我们可以完成回顾，对比，回滚等操作。

Git的历史

- SCCS(Source Code Control System)：1972年；Unix only；储存初始版本文件后每次储存改变部分
- RCS(Revision Control System)：1982年；cross-platform；储存最近一次版本查看之前版本通过回滚；
- CVS(Concurrent Version System)：1986-1990年；多个文件
- SVN(Apache Subversion)：2000年；非文本文件；非指定文件或文件组，而是整个库（可以改名）
- Bitkeeper SCM；2000年；商用不免费；Distributed Version Control
- Git：2005年；cross-platform；更快；Distributed Version Control；免费

Git 是一个开源的分布式版本控制系统，保证了可用性和安全性。分布式是 Git 和其它非分布式的版本控制系统最核心的区别具有以下优点

1. 适合分布式开发，每一个个体都可以作为服务器。每一次Clone就是从服务器上pull到了所有的内容，包括版本信息。
2. 公共服务器压力和数据量都不会太大。
3. 速度快、灵活，分支之间可以任意切换。
4. 任意两个开发者之间可以很容易的解决冲突，并且单机上就可以进行分支合并。
5. 离线工作，不影响本地代码编写，等有网络连接以后可以再上传代码，并且在本地可以根据不同的需要，本地新建自己的分支。

## Vscode

可以通过界面进行所有操作

## 基本命令

```bash
#克隆现有的仓库
git clone [url]
#在现有目录中初始化仓库 （先进入目录！）
git init
#检查当前文件状态
git status
#添加跟踪
git add fielname
#查看简略信息：新添加的未跟踪文件前面有 ?? 标记，新添加到暂存区中的文件前面有 A 标记，修改过的文件前面有 M 标记
git status -s
#执行 git diff 来查看执行 git status 的结果的详细信息
git diff
#使用 git add 命令将想要快照的内容写入缓存区， 而执行 git commit 将缓存区内容添加到仓库中
git commit
#git reset HEAD 命令用于取消已缓存的内容
git reset HEAD <file>
#要从 Git 中移除某个文件，就必须要从已跟踪文件清单中移除，然后提交
git rm <file>
#改名
git mv file_from file_to
#标签
git tag -a v1.0
```

分支管理

```bash
#创建分支命令：
git branch (branchname)
#删除分支命令：
git branch -d (branchname)
#切换分支命令:
git checkout (branchname)
#当你切换分支的时候，Git 会用该分支的最后提交的快照替换你的工作目录的内容， 所以多个分支不需要多个目录。
#合并分支命令:
git merge
#列出分支基本命令：
git branch
#查看历史
git log
#如果你达到一个重要的阶段，并希望永远记住那个特别的提交快照，你可以使用 git tag 给它打上标签
git tag -a v1.0 commitID -m 'commit'
```

## 忽略文件  .gitignore

文件 .gitignore 的格式规范如下：

- 所有空行会被 Git 忽略
- 以`#`开头为注释将被 Git 忽略（hash用`\#`表示）
- 以空格结尾将被忽略（空格用`\+space`表示）
- 可以使用标准的 glob 模式匹配
- 匹配模式可以以`/`开头防止递归。
- 匹配模式可以以`/`结尾指定目录。
- 要忽略指定模式以外的文件或目录，可以在模式前加上惊叹号`!`取反。

- An optional prefix `!` which negates the pattern; any matching file excluded by a previous pattern will become included again. It is not possible to re-include a file if a parent directory of that file is excluded. Git doesn’t list excluded directories for performance reasons, so any patterns on contained files have no effect, no matter where they are defined. Put a backslash (`\`) in front of the first `!` for patterns that begin with a literal `!`, for example, `\!important!.txt`.
- If the pattern ends with a slash, it is removed for the purpose of the following description, but it would only find a match with a directory. In other words, foo/ will match a directory foo and paths underneath it, but will not match a regular file or a symbolic link foo (this is consistent with the way how pathspec works in general in Git).
- If the pattern does not contain a slash /, Git treats it as a shell glob pattern and checks for a match against the pathname relative to the location of the .gitignore file (relative to the toplevel of the work tree if not from a .gitignore file).
- Otherwise, Git treats the pattern as a shell glob: `*` matches anything except `/`, `?` matches any one character except `/` and `[]` matches one character in a selected range. See fnmatch(3) and the FNM_PATHNAME flag for a more detailed description.
- A leading slash matches the beginning of the pathname. For example, `/*.c` matches `cat-file.c` but not `mozilla-sha1/sha1.c`.

Two consecutive asterisks (`**`) in patterns matched against full pathname may have special meaning:

- A leading `**` followed by a slash means match in all directories. For example, `**/foo` matches file or directory `foo` anywhere, the same as pattern `foo`. `**/foo/bar` matches file or directory `bar` anywhere that is directly under directory `foo`.
- A trailing `/**` matches everything inside. For example, `abc/**` matches all files inside directory `abc`, relative to the location of the .gitignore file, with infinite depth.
- A slash followed by two consecutive asterisks then a slash matches zero or more directories. For example, `a/**/b` matches `a/b`, `a/x/b`, `a/x/y/b` and so on.
- Other consecutive asterisks are considered regular asterisks and will match according to the previous rules.

### 更新`.gitignore`

A gitignore file specifies intentionally untracked files that Git should ignore. **Files already tracked by Git are not affected**; see the NOTES below for details.

```bash
git rm -r --cached .  #清除缓存
git add . #重新trace file
git commit -m "update .gitignore" #提交和注释
git push origin master #可选，如果需要同步到remote上的话
```

## 实际使用

### commit 规范

feat：新功能（feature）

fix：修补bug

docs：文档（documentation）

style： 格式（不影响代码运行的变动）

refactor：重构（即不是新增功能，也不是修改bug的代码变动）

test：增加测试

chore：构建过程或辅助工具的变动

### 初始化

```bash
# 设置全局用户名和邮箱
git config --global user.name "shunyu"
git config --global user.email "yangshunyu.1994@gmail.com"
# 设置局部用户名和邮箱 在有git仓库的地方才可以
git config user.name "shunyu"
git config user.email "yangshunyu.1994@gmail.com"
#查看配置
git config --list
#查看手册
git help <verb>
git <verb> --help
man git-<verb>
```

### 远程ssh

```bash
#生成key
#-f 文件名 -C "备注" -t rsa
ssh-keygen
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -f "name_rsa"

#将pubkey加入github账户SSH列表后查看是否成功
ssh -T git@github.com
```

ssh-agent (Mac / linux) only need a config file

./.ssh/config

>\# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile /Users/shun/.ssh/git_rsa
User spe-shun

windows

<https://help.github.com/en/articles/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows>

### 连接一个远程库

```bash
#提交GIT
git remote add [shortname] [url]
git push -u [shortname] master

#查看当前的远程库
git remote
#从远程仓库下载新分支与数据
git fetch
```

### 使用过程中的异常

```bash
#windows 下提示IP没有加入know-host列表
ssh -T git@github.com

# 建立的项目早于GITHUB上库的建立
# fatal: refusing to merge unrelated histories
git pull origin master --allow-unrelated-history
git push origin master
```
