
- in dev mode bekommt man probleme mit stub modules nicht mit. (aaf - select 2 rumschieben)

- add bundle on request when working with tiles, it might get called too late.
    using tiles, you run into a new class of problems
    tiles use subrequests, so if you want to add something to a request, you have to add it to the parent.
    if you use site layouts but want to add a bundle to the request in a tile, you have to take care of the order of which the tiles are executed. the stylesheets/scripts tile might just already been called before you add the bundel to the request - and then it was pointless.

- at bundles, always include resources list, even if it's empty. otherwise it's None, which isn't iterable and breaks on several points.
