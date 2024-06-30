import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Home')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            const Text('example1'),
            const SizedBox(height: 16),
            Semantics(
              label: 'example2-label',
              child: const Text('example2'),
            ),
            const SizedBox(height: 16),
            Semantics(
              identifier: 'example3-id',
              child: const Text('example3'),
            ),
            const SizedBox(height: 16),
            Semantics(
              value: 'example4-value',
              child: const Text('example4'),
            ),
            const SizedBox(height: 16),
            Semantics(
              enabled: false,
              child: const Text('example5'),
            ),
            const SizedBox(height: 16),
            Semantics(
              hidden: true,
              child: const Text('example6'),
            ),
          ],
        ),
      ),
    );
  }
}
