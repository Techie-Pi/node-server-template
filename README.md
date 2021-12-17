# Node Server Template
> Simple express server with integrated deployment

### How to use this template?
You need to:
- Change the package name
- Update the ``.github/workflows/deploy.yml`` file:
  1. Create the ``HOST``, ``USERNAME``, ``PORT`` and ``PASSWORD`` secrets
  2. Replace ``remote-path`` with your remote path
  3. Replace ``pm2-id`` with the name or ID of the deployed project

Make sure to run ``npm install`` locally and push the changes to generate the package-lock.json.

#### Note:
> Why I haven't created a ``package-lock.json`` myself?
> 
> Because some packages that express depends on may be updated in a future and the deployment runs ``npm ci``
