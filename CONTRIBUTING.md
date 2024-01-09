# W3C Credentials Community Group

Contributions to this repository are intended to become part of
Recommendation-track documents governed by the
[W3C Patent Policy](https://www.w3.org/Consortium/Patent-Policy-20040205/) and
[Software and Document License](https://www.w3.org/Consortium/Legal/copyright-software).
To make substantive contributions to specifications, you must either participate
in the relevant W3C Working Group or make a non-member patent licensing commitment.

If you are not the sole contributor to a contribution (pull request), please
identify all contributors in the pull request comment.

To add a contributor (other than yourself, that's automatic), mark them one
per line as follows:

```
+@github_username
```

If you added a contributor by mistake, you can remove them in a comment with:

```
-@github_username
```

If you are making a pull request on behalf of someone else but you had no
part in designing the feature, you can remove yourself with the above syntax.

## Pull Request Guidance

The following is informal guidance on how to contribute pull requests.

Please note that even if the text in a PR isn't perfect, you are encouraged to
submit it as a first step, to allow others to comment and collaborate on it.

A walkthrough session covering PR tips is available in the recording of the [2023-11-28 VC API call](https://meet.w3c-ccg.org/archives/w3c-ccg-vcapi-2023-11-28.mp4).

### How to pick an issue for PR
Look for the issues tagged with with "Ready for PR".
Read through the issue and see if you have a good grasp of what is going on.

### Specification Syntax
[ReSpec](https://respec.org/docs) is the language used to write the spec.
Therefore, the way to edit the specification is to edit HTML, following ReSpec syntax.

### Key Files
The key entry point is [index.html](./index.html).
In many pull requests, this is the only file that is changed.

### Commit Messages
For commit messages:
- Use "active voice"
- Use less than 50 characters

### Pull request branches
To begin editing, you can make a fork or ask for editing access to the repo.
If making a significant change, always make a new branch.
It is generally advisable to put your username in the branch name; this makes
it easier to know which branches to prune over time.

### Pull request descriptions

Any associated issue number(s) should be included the PR description.

There is automation which adds `preview` and `diff` links to the PR description.
This is done through GitHub "CI" or "Continuous Integration" by a library
called `PR-Preview`, which is configured in `.pr-preview.json`.

***Note:** Some things are broken in preview & diff, such as images and 
rendering of API files*

### Pull request reviewers
Reviewers should be added by the pull requester.
A "healthy" number of reviewers, usually at least 3 people 
other than yourself, is good.

### Merging Pull Requests

It is recommended to merge PR using a "Rebase merge", rather than a "Squash and merge".
Merge commits are disabled in order maintain a linear commit history.
"Rebase and merge" is prefered because it maintains the authorship and commit date information which can be important for determining intellectual property contributions.

## Edit style guide
The following are style tips when editing the specification.
- Try to have max of 80 char (do hard wrap, not auto wrap)
- Indent HTML to the proper level using two-spaces per level.
- Left justify prose to the first column