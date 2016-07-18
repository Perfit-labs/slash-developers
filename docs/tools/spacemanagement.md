---
page: :docsToolsSpaceManagement
---

## Data import tools

You can import data from other systems into Contentful using our [contentful-importer.rb](https://github.com/contentful/contentful-importer.rb) gem.

The importer is using a flexible input format for which you can write your own exporters, but we also provide exporters for:

- [Drupal](https://github.com/contentful/drupal-exporter.rb)
- [SQL databases](https://github.com/contentful/database-exporter.rb)
- [WordPress](https://github.com/contentful/wordpress-exporter.rb)

### Tutorials

- [Import and export](/developers/docs/tutorials/general/import-and-export/)<br>
By the end of this tutorial, you will be able to seamlessly shift to Contentful and enjoy all its benefits, spending as little time as possible dealing with issues.

- [Exporting from Drupal](/blog/2015/03/09/exporting-content-from-wordpress-drupal-or-elsewhere-and-importing-in-contentful/)

## Contentful Space Sync

This tool allows you to perform a one way synchronization from one Contentful space to another. Use this tool to generate your development and staging spaces.<br>
[View on GitHub](https://github.com/contentful/contentful-space-sync)<br>
[Read the tutorial](/developers/docs/tutorials/general/using-contentful-space-sync/)<br>

## Contentful Link Cleaner

When you have a link to an entry or asset on a published entry, if you delete the linked entry the entry that links to it will have a reference to a non existing entity. This tool cleans up unresolved entry links in Contentful spaces.<br>
[View on GitHub](https://github.com/contentful/contentful-link-cleaner)

## Contentful Bootstrap

To get you jump-started in Contentful using Contentful Bootstrap. We also have a tutorial.<br>
[View on GitHub](https://github.com/contentful/contentful-bootstrap.rb)<br>
[Read the tutorial](/developers/docs/ruby/tutorials/using-contentful-bootstrap-for-keeping-up-with-your-spaces/)<br>

## Third party tools

Please notice that this library is not officially supported by Contentful and may be incomplete, but we've at least tried it out.
If you want to check all of our non supported SDKs and tools, check out our repository on [GitHub](https://github.com/contentful-labs/awesome-contentful).

## commercetools
A Swift script which enables syncing content from commercetools to Contentful<br>
[View on GitHub](https://github.com/contentful-labs/Cube)
