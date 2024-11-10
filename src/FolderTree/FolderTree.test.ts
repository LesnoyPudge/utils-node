import { Counter } from '@lesnoypudge/utils';
import { FolderTree } from '@root';



describe('FolderTree', () => {
    test('1', () => {
        const tree = new FolderTree('./non-existing-folder');

        expect(tree.data).toBe(null);
        expect(tree.isEmpty()).toBe(true);
    });

    test('2', () => {
        const tree = new FolderTree('.');
        const c = new Counter();

        expect(tree.isEmpty()).toBe(false);

        tree.traverse(() => c.inc());

        // 1 current folder and 3 files
        expect(c.get()).toBe(4);
        expect(tree.data?.files.length).toBe(3);
        expect(tree.data?.folders.length).toBe(0);
        expect(tree.data?.name).toBe('FolderTree');
    });
});